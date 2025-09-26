const { OpenAI }=require('openai')
const openai= new OpenAI({
    apiKey: "", dangerouslyAllowBrowser: true
})

export async function sendmsgtoopenai(message){
    const res =  await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "user",
            "content": message
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
console.log(res)
    return res.choices[0].message.content;
}
