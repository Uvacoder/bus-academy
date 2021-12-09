import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // query
    const { total } = req.query;

    console.log(total);

    axios
      .post(
        'https://app.sandbox.midtrans.com/snap/v1/transactions',
        {
          transaction_details: {
            order_id: `ORDER-101-${new Date().getTime()}`,
            gross_amount: total,
          },
        },
        {
          headers: {
            Authorization: `Basic ${process.env.MIDTRANS_KEY}`,
          },
        }
      )
      .then((resp) => {
        return res.status(200).json(resp.data);
      });
  }
}
