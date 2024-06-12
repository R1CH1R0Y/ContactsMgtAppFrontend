import React from 'react'

const Search = () => {

  return (
    <div>
        <div class="card text-center mb-3">
  <div class="card-body">
    <h5 class="card-title">Search-Delete Contacts</h5>
    <p></p>
    <p></p>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">First Name/Last Name/Mobile :</label>
                <input type="text" className="form-control" />
            </div>
        </div>
    </div>
    <br />
    <button className="btn btn-warning">Search</button>
    <br />
    <br />
    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Mobile .</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                        <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Mobile .</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                        </tbody>
                    </table>
  </div>
</div>
    </div>
  )
}

export default Search