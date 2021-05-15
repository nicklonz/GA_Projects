import logo from './logo.svg';
import './App.css';

/*
This lab is meant to provide additional practice creating reusable
React Components.

In the HTML section you will find 3 article elements.

Perform the following to complete the lab:

- Create an array called `newsFeedData` that will contain 3 objects
  with the following properties:  `title`, `tags`, `image`, and `impressions`
- Populate those objects based on those values assigned in the
  HTML which means you must  examine the HTML and find those values
  assigned to each DOM element.
- Create a `NewsFeedApp` component and pass it the `newsFeedData`
  array as `props`.
- The `NewsFeedApp` component will then render 3 `articles` based on
  properties of the objects in the `newsFeedData` array.
*/

/* SUMMARY OF STEPS
  1.  create an array called newsFeedData that will contain the 3 objects
  2.  create a NewsFeedApp component
  3.  pass the NewsFeedApp component the newsFeedData as a prop
  4. render 3 html sections with that info
*/
function App() {
  return (
    <div className="App">
      <header>
        <section class="container">
          <a href="#">
            <h1>Feedr</h1>
          </a>
          <nav>
            <ul>
              <li><a href="#">News Source: <span>Source Name</span></a>
                <ul id="sourceMenuMain"></ul>
              </li>
            </ul>
            <section id="search">
              <input type="text" name="name" value=""/>
              <a href="#"><img src="http://res.cloudinary.com/jkeohan/image/upload/v1533735338/search_icon.png" alt="" /></a>
            </section>
          </nav>
          <div class="clearfix"></div>
        </section>
      </header>

      <div id="popUp" class="loader">
        <a href="#" class="closePopUp">X</a>
        <div class="container">
          <h1>My sister just discovered stop motion...</h1>
          <p>
            My sister just discovered stop motion...
          </p>
          <a href="https://v.redd.it/8uh20iio7pe11" class="popUpAction" target="_blank">Read more from source</a>
        </div>
      </div>

      {/*<!--recreate the entire section below   -->*/}

      <section id="main" class="container">
        <article class="article">
          <section class="featuredImage">
            <img src="https://i.amz.mshcdn.com/3b45dtSbBVYC4rp4K7o1WLJxs1c=/175x175/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F80483%2Ff5ca53a6-fc95-41e9-9a65-2d5ad5712823.jpg" aslt=""/>
          </section>
          <section class="articleContent">
            <a href="#" id="40">
              <h3>New York is getting its very own checkout-free Amazon Go store</h3>
            </a>
            <h6 class="tags">Tech</h6>
          </section>
          <section class="impressions">
            14
          </section>
          <div class="clearfix"></div>
        </article>
        <article class="article">
          <section class="featuredImage">
            <img src="https://i.amz.mshcdn.com/15mVVAeRIrV0j6SQhwFbobUCNdI=/175x175/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F63304%2Fb9402968-f3b8-4cdb-a6a1-077f77bdfab7.jpeg" aslt=""/>
          </section>
          <section class="articleContent">
            <a href="#" id="41">
              <h3>9 of the best fitness trackers because there are literally too many to choose</h3>
            </a>
            <h6 class="tags">Tech</h6>
          </section>
          <section class="impressions">
            104
          </section>
          <div class="clearfix"></div>
        </article>
        <article class="article">
          <section class="featuredImage">
            <img src="https://i.amz.mshcdn.com/vUcmKDjddK_KmnulphmEDgtPkEc=/175x175/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fstory%2Fthumbnail%2F69607%2Fd147a12b-daaa-4afb-bb13-74f6db9dffa5.png" aslt=""/>
          </section>
          <section class="articleContent">
            <a href="#" id="43">
              <h3>The most addictive Google Doodle games to waste an afternoon at work</h3>
            </a>
            <h6 class="tags">Culture</h6>
          </section>
          <section class="impressions">
            222
          </section>
          <div class="clearfix"></div>
        </article>
      </section>
    </div>
  );
}

export default App;
