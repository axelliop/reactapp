import React from 'react'

const Colores = () => {
  return (
    <div>

<div className="section-fluid-main">
    <div className="section">
          <div className="info-wrap mob-margin">
              <p className="title-up">OFERTAS!</p>
              <h2>Chevrolet Camaro</h2>
              <h4>$174 <span>$237</span></h4>	
              <div className="section-fluid">
                  <input className="desc-btn" type="radio" id="desc-1" name="desc-btn" checked/>
                  <label for="desc-1">Descrpicion</label> 
                  <input className="desc-btn" type="radio" id="desc-2" name="desc-btn"/>
                  <label for="desc-2">Detalles</label> 
                  <div className="section-fluid desc-sec accor-1">
                      <p>El mejor Auto</p>
                  </div>	
                  <div className="section-fluid desc-sec accor-2">
                      <div className="section-inline">
                          <p><span>76</span>cm
                          Lenght</p>
                      </div>	
                      <div class="section-inline">
                          <p><span>68</span>Width</p>
                      </div>
                      <div class="section-inline">
                          <p><span>87</span>cmHeight</p>
                      </div>
                      <div class="section-inline">
                          <p><span>10</span>Weight</p>
                      </div>
                  </div>	
              </div>	
              <h5>Choose upholstery:</h5>
          </div>
          <div className="clearfix"></div>
          <input className="color-btn for-color-1" type="radio" id="color-1" name="color-btn" checked/>
          <label className="first-color" for="color-1"></label> 
          <input className="color-btn for-color-2" type="radio" id="color-2" name="color-btn"/>
          <label className="color-2" for="color-2"></label> 
          <input className="color-btn for-color-3" type="radio" id="color-3" name="color-btn"/>
          <label className="color-3" for="color-3"></label> 
          <input className="color-btn for-color-5" type="radio" id="color-5" name="color-btn"/>
          <label className="color-5" for="color-5"></label> 
          <input className="color-btn for-color-6" type="radio" id="color-6" name="color-btn"/>
          <label className="color-6" for="color-6"></label> 
          <div className="clearfix"></div>
          <div className="info-wrap">
            <a href="#" class="btn"><i class="uil uil-shopping-cart icon"></i> Add To Cart</a>
          </div>
          <div className="img-wrap chair-1"></div>
          <div className="img-wrap chair-2"></div>	
          <div className="img-wrap chair-3"></div>
          <div className="img-wrap chair-4"></div>
          <div className="img-wrap chair-5"></div>
          <div className="img-wrap chair-6"></div>		
          <div className="back-color"></div>	
          <div className="back-color chair-2"></div>	
          <div className="back-color chair-3"></div>	
          <div className="back-color chair-4"></div>	
          <div className="back-color chair-5"></div>	
          <div className="back-color chair-6"></div>	
    </div>
    </div>
    </div>
    
  )
}

export default Colores