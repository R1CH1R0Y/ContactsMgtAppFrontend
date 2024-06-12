import React from 'react'

const View = () => {
    return (
        <div>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Contact List</h5>
                    <p></p>
                    <p></p>
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
                            <tr>
                                <td>Otto</td>
                                <td>Mark</td>
                                <td>8978700078</td>
                                <td>@mdo</td>
                                <td>VCB</td>
                            </tr>
                            <tr>
                                <td>Thornton</td>
                                <td>Jacob</td>
                                <td>6756447747</td>
                                <td>@fat</td>
                                <td>BNM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default View