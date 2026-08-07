import { NextRequest, NextResponse } from "next/server";

type Entry={count:number;reset:number};
const buckets=new Map<string,Entry>();
const EMAIL=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRateLimited(ip:string){
  const now=Date.now(), current=buckets.get(ip);
  if(!current||current.reset<now){buckets.set(ip,{count:1,reset:now+15*60_000});return false;}
  current.count+=1; return current.count>4;
}
function looksLikeSpam(text:string){
  const links=(text.match(/https?:\/\/|www\./gi)||[]).length;
  const repeated=/(.)\1{8,}/.test(text);
  const keywords=/\b(casino|crypto giveaway|seo service|backlinks|viagra|loan offer)\b/i.test(text);
  return links>2||repeated||keywords;
}

export async function POST(request:NextRequest){
  try{
    const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown";
    if(isRateLimited(ip)) return NextResponse.json({error:"rate_limited"},{status:429});
    const body=await request.json();
    const name=String(body.name||"").trim(), email=String(body.email||"").trim(), company=String(body.company||"").trim(), message=String(body.message||"").trim();
    if(body.website) return NextResponse.json({ok:true});
    if(name.length<2||name.length>100||!EMAIL.test(email)||email.length>160||company.length>120||message.length<20||message.length>3000) return NextResponse.json({error:"invalid"},{status:400});
    if(looksLikeSpam(`${name} ${company} ${message}`)) return NextResponse.json({error:"spam"},{status:400});
    const apiKey=process.env.RESEND_API_KEY, to=process.env.CONTACT_TO_EMAIL, from=process.env.CONTACT_FROM_EMAIL||"Portfolio <onboarding@resend.dev>";
    if(!apiKey||!to){ console.error("Contact form is missing RESEND_API_KEY or CONTACT_TO_EMAIL"); return NextResponse.json({error:"not_configured"},{status:503}); }
    const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:email,subject:`Portfolio — contato de ${name}`,text:`Nome: ${name}\nE-mail: ${email}\nEmpresa: ${company||"Não informada"}\nIdioma: ${body.locale||"pt"}\n\n${message}`})});
    if(!response.ok){console.error("Email provider rejected contact request",response.status);return NextResponse.json({error:"delivery"},{status:502});}
    return NextResponse.json({ok:true});
  }catch{return NextResponse.json({error:"invalid"},{status:400});}
}
