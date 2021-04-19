import React from "react";

const SelectComponent = () => {
  return (
    <div className='dashboardSelectComponent mt-3 ml-1'>
      <form>
        <div className='row'>
          <div className='col-md-2'>
            <div className='form-group'>
              <label>Form Date</label>
              <select className='form-control dashboardSelectTag'></select>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='form-group'>
              <label>To Date</label>
              <select className='form-control dashboardSelectTag'></select>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='form-group'>
              <label>Frequency</label>
              <select className='form-control dashboardSelectTag'></select>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='form-group'>
              <label>Financial Instutition</label>
              <select className='form-control dashboardSelectTag'></select>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='form-group'>
              <label>Business Unit</label>
              <select className='form-control dashboardSelectTag'></select>
            </div>
          </div>
          <div className='col-md-2'>
            <div className='form-group'>
              <label></label>
              <button className='form-control'>Update Dashboard</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectComponent;
