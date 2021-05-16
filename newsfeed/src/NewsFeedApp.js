import React from 'react'

function NewsFeedApp(props) {
    return (
      <article class="article">
        <section class="featuredImage">
          <img src={props.article.img} alt= "Featured Article Image"/>
        </section>
        <section class="articleContent">
          <a href="#" id="43">
            <h3>{props.article.title}</h3>
          </a>
          <h6 class="tags">{props.article.tags}</h6>
        </section>
        <section class="impressions">{props.article.impressions}
          </section>
        <div class="clearfix"></div>
      </article>
    )
}

export default NewsFeedApp;