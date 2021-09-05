import React from "react";

export default function Services() {
  return (
    <section className="container" style={{marginTop:"120px"}}>
        <h2 className="mb-4">Services</h2>
        <div className="row">
            {/* left col */}
            <div className="col-lg-7">
                <div className="row">
                    <div className="col">
                        <h5 className="text-success">Website Design</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A delectus illum minus obcaecati quasi corrupti, ea officia omnis aperiam, repudiandae alias aut voluptatibus fugit consequuntur. Quia laborum repellendus aut, id fugiat earum voluptate. Facere eum tempore vitae, vel placeat fuga omnis deleniti sed nam mollitia sequi eos, repellendus commodi officia!</p>
                        <p className="text-secondary">Pricing : $1,000 - $3,000</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="text-info">Website Maintenance</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A delectus illum minus obcaecati quasi corrupti, ea officia omnis aperiam, repudiandae alias aut voluptatibus fugit consequuntur. Quia laborum repellendus aut, id fugiat earum voluptate. Facere eum tempore vitae, vel placeat fuga omnis deleniti sed nam mollitia sequi eos, repellendus commodi officia!</p>
                        <p className="text-secondary">Pricing : $250 per month</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="text-danger">Website Hosting</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A delectus illum minus obcaecati quasi corrupti, ea officia omnis aperiam, repudiandae alias aut voluptatibus fugit consequuntur. Quia laborum repellendus aut, id fugiat earum voluptate. Facere eum tempore vitae, vel placeat fuga omnis deleniti sed nam mollitia sequi eos, repellendus commodi officia!</p>
                        <p className="text-secondary">Pricing : $25 per month</p>
                    </div>
                </div>
            </div>

            {/* right col */}
            <div className="col-lg-5 h-50 bg-secondary text-warning border my-3 p-3">
                <h3>Get A Quote</h3>
                    <div class="input-group mb-3 row">
                        <div className="col-12">
                            <label>Name</label>
                            <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"/><br/>
                        </div>
                        <div className="col-12">
                            <label>Email</label>
                            <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/><br/>
                        </div>
                        <div className="col-12">
                            <label>Message</label>
                            <textarea class="form-control" aria-label="With textarea" placeholder="Message"></textarea>
                        </div>
                        <div className="my-3">
                            <button type="button" class="btn btn-warning w-100">Submit</button>
                        </div>
                    </div>
            </div>






        </div>
       
    </section>
  );
}
/* 
 <div className="row my-3">
            

            <div className="col-lg-6">
               
            </div>

            <div className="col-lg-6 mx-auto">
               
            </div>
        </div>

        <div className="row my-3">
        <div className="col-lg-6">
                
            </div>
        <div className="col-md-6"></div>
        </div>
        <div className="row my-3">
        <div className="col-lg-6">
                
            </div>
        <div className="col-md-6"></div>
        </div>
*/