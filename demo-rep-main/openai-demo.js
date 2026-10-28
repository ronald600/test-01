const openai = require("openai");
openai.apiKey = process.env.OPENAI_API_KEY;
async function generateSummary(prompt){
 const response = await openai.ChatCompletion.create({
  model:"gpt-3.5-turbo",
  messages:[{role:"user",content:prompt}]
 });
 return response.choices[0].message.content;
}
module.exports={generateSummary};
