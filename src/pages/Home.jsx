import React from 'react'

function Home() {
  return (
    <div classname="container">
        <h2 class="text-center mb-3">Welcome to <b> FIRST FIDDLE</b></h2>
        <div class="row">
            <div class="col-md-7">
                <p>First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining sector, is
                    headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy and Bougie
                    in 2022, we have created wave after wave in the industry with over 30+ restaurants, brands, and
                    franchises across India.</p>
                <div class="text-center">
                    <button class="btn btn-success">Read More ....</button>
                </div>
            </div>
            <div class="col-md-5 text-center">
                <img src="https://pn-paul.netlify.app/image/first.jpg" alt="" class="img12"/>
            </div>
        </div>
        {/* <!-- row end --> */}
    </div>
  )
}

export default Home
