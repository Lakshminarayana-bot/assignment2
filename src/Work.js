import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Work extends Component {
    render() {
        return (
            <div class="container-fluid">
      <div class="row">        
      <div class="cols-xs-12 col-sm-6 col-md-6 col-lg-4">
        <strong>Ironman</strong>
        <form>
          <Link to="/leela"><label>Leela</label></Link>
          <img class="image" src="/images/iron.png"/>
        </form>
      </div>
      <div class="cols-xs-12 col-sm-6 col-md-6 col-lg-4">
      <strong>John Wick</strong>
        <form>
          <label><Link to="/harsha">Harsha</Link></label>>
      <img class="image" src="/images/john.jpg"/>
      </form>
      </div>


      <div class="cols-xs-12 col-sm-6 col-md-6 col-lg-4">
      <strong>Thor</strong>
        <form>
          <label><Link to="/chetan">Chetan</Link></label>>
      <img class="image" src="/images/thor.jpg"/>
      </form>
      </div>
      </div>
      <div class="row">

      <div class="cols-xs-12 col-sm-6 col-md-6 col-lg-4">
      <strong>WonderWoman</strong>
        <form>
          <label><Link to="/sirisha">sirisha</Link></label>>
      <img class="image" src="/images/wonder.jpeg"/>
      </form>
      </div>

      <div class="cols-xs-12 col-sm-6 col-md-6 col-lg-4">
      <strong>DoctorStrange</strong>
        <form>
          <label><Link to="/indu">Indu__</Link></label>>
      <img class="image" src="/images/dr.jpeg"/>
      </form>
      </div>

      <div class="cols-xs-12 col-sm-6 col-md-6 col-lg-4">
      <strong>CaptainMarvel</strong>
        <form>
          <label><Link to="/banu">Banu__</Link> </label>>
      <img class="image" src="/images/cap.jpg"/>
      </form>
      </div>
      </div>

    </div>
        )
    }
}

export default Work
