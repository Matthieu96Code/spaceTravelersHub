import React from 'react';

const MissionsTable = () => {
  const action = '';

  return (
    <div className="missions-table">
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">{action}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style={{ minWidth: '10rem' }}>Thaicom</th>
            <td>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis, ullam
              officia cumque repudiandae quisquam libero eum, eveniet ducimus quo, quae vero
              adipisci! Odit necessitatibus at accusamus aut delectus inventore, amet est rerum
              consequatur ipsa ipsum dignissimos excepturi labore sit debitis nisi nobis quibusdam
              fugit natus alias quam similique molestiae eveniet. Non eos qui quos fugiat magni
              inventore voluptates nostrum maiores, molestiae reiciendis facilis. Eos, laborum in
              molestias fugit, facere praesentium blanditiis, quo nulla aut beatae voluptatibus
              aspernatur. Pariatur dolorem velit quod fugiat maxime magnam veniam illo, consectetur,
              suscipit enim consequatur earum autem atque sit culpa? Numquam maxime corporis
              blanditiis?
            </td>
            <td>
              <span className="badge text-bg-secondary">NOT A MEMBER</span>
            </td>
            <td style={{ minWidth: '10rem', textAlign: 'center' }}>
              <button type="button" className="btn btn-outline-secondary btn-sm">Join Mission</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MissionsTable;
