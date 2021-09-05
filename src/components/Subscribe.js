import React from 'react'

export default function Subscribe() {
    return (
        <div className="container-fluid bg-secondary text-white px-5">
        <div className="row">
          <div className="col-lg-6 text-warning lead fw-bold my-3 text-center">Subscribe To Our Newsletter</div>
          <div className="col-lg-6 my-3">
            <form className="row row-cols-md-auto justify-content-center">
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                />
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-lg-4">
                <button className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
