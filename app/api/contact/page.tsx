export default function handler(
  req: { body: any },
  res: { send: (arg0: number) => void }
) {
  console.log(req.body);
  res.send(200);
}
