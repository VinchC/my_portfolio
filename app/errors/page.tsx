export default async function ErrorPage() {
    try {
    const response = await fetch('https://restcountries.com/v4.1/all');
  
    if (response.ok) {
      console.log('Promise resolved and HTTP status is successful');
    } else {
      return Error;
    }
  } catch (error) {
    console.error('Fetch', error);
  }
}