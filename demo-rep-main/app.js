const {generateSummary}=require("./openai-demo");
const {createCharge}=require("./stripe-demo");
async function run(){
 await generateSummary("Explain AI.");
 await createCharge("tok_visa");
}
run();
