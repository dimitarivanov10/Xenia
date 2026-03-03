export default function DealsSearchFormView() {
  // Simple function to handle the change if you want it to behave like the original
  const handleChange = (e) => {
    console.log("Selected:", e.target.value);
    // In React, we usually don't force form clicks;
    // we let the Search button handle the submit.
  };

  return (
    <div className="search-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form
              id="search-form"
              name="gs"
              method="submit"
              role="search"
              action="#"
              onSubmit={(e) => e.preventDefault()} // Prevents page reload on search
            >
              <div className="row">
                <div className="col-lg-2">
                  <h4>Sort Deals By:</h4>
                </div>
                <div className="col-lg-4">
                  <fieldset>
                    <select
                      name="Location"
                      className="form-select"
                      aria-label="Default select example"
                      id="chooseLocation"
                      defaultValue="" // Fixes the "selected" error
                      onChange={handleChange} // Fixes the "string" error
                    >
                      <option value="" disabled>
                        Destinations
                      </option>
                      <option value="Italy">Italy</option>
                      <option value="France">France</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Australia">Australia</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Singapore">Singapore</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-4">
                  <fieldset>
                    <select
                      name="Price"
                      className="form-select"
                      aria-label="Default select example"
                      id="choosePrice"
                      defaultValue="" 
                      onChange={handleChange} 
                    >
                      <option value="" disabled>
                        Price Range
                      </option>
                      <option value="100-250">$100 - $250</option>
                      <option value="250-500">$250 - $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500+">$2,500+</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-2">
                  <fieldset>
                    <button className="border-button" type="submit">
                      Search Results
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
