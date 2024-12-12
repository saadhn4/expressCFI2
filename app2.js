import axios from "axios";

async function urlGetter() {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    response.data.forEach((x) => console.log(x.id, x.title));
  } catch (error) {
    console.log(error);
  }
}
urlGetter();
