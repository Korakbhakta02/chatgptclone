const { OpenAI }=require('openai')
const openai= new OpenAI({
    apiKey: "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", dangerouslyAllowBrowser: true
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
