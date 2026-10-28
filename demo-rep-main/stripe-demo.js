const Stripe=require("stripe");
const stripe=Stripe(process.env.STRIPE_SECRET_KEY);
async function createCharge(token){
 return await stripe.charges.create({
  amount:5000,
  currency:"usd",
  source:token,
  description:"Demo Payment"
 });
}
module.exports={createCharge};
