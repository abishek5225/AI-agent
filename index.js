    import OpenAI from "openai";

const OPEN_AI_API_KEY =
  "";//enter your openai api key here

const client = new OpenAI({
    apiKey: OPEN_AI_API_KEY,
});

//Tools for LLM
function aboutMe(Aboutme = '') {
    if(Aboutme == "name") return 'I am Abishek Chaulagain';
    if(Aboutme == "age") return 'I am 21 years old';
    if(Aboutme == "address") return 'I am from Jhapa, Nepal';
    if(Aboutme == "skills") return 'I am a full stack developer';
}
const user = "What is your name?";
client.chat.completions.create({
    model:"gpt-4",
    messages: [{ role: "user", content: user }],
}).then(response => {
    console.log(response.choices[0].message.content);
})