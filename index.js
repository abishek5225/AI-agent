  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



//Tools for LLM
function aboutMe(Aboutme = '') {
    if(Aboutme == "name") return 'I am Abishek Chaulagain';
    if(Aboutme == "age") return 'I am 21 years old';
    if(Aboutme == "address") return 'I am from Jhapa, Nepal';
    if(Aboutme == "skills") return 'I am a full stack developer';
}
const user = "What is your name?";
client.chat.completions.create({
    model:"",
    messages: [{ role: "user", content: user }],
}).then(response => {
    console.log(response.choices[0].message.content);
})