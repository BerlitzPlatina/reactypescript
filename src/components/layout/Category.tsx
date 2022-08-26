import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import request from "../../requests/request";
import { ICategory } from "../types/category";

function Category() {
  function getDataUserLogin(): Promise<AxiosResponse<ICategory[], any>> {
    return request(`/categories`, {
      method: "GET",
    });
  }
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    getDataUserLogin().then(res => {
      setCategories(res.data)
    })
  }, [])
  return (
      <div className="dropdown-menu megamenu">
        <div className="megamenu-inner">
          <div className="row">
            <div className="col-md-3">
              <h2 className="megamenu-title">Column 1</h2>
              <ul className="vertical-menu">
                <li><a href="#">Example 1</a></li>
                <li><a href="#">Example 2</a></li>
                <li><a href="#">Example 3</a></li>
                <li><a href="#">Example 4</a></li>
                <li><a href="#">Example 5</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2 className="megamenu-title">Column 2</h2>
              <ul className="vertical-menu">
                <li><a href="#">Example 6</a></li>
                <li><a href="#">Example 7</a></li>
                <li><a href="#">Example 8</a></li>
                <li><a href="#">Example 9</a></li>
                <li><a href="#">Example 10</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2 className="megamenu-title">Column 3</h2>
              <ul className="vertical-menu">
                <li><a href="#">Example 11</a></li>
                <li><a href="#">Example 12</a></li>
                <li><a href="#">Example 13</a></li>
                <li><a href="#">Example 14</a></li>
                <li><a href="#">Example 15</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h2 className="megamenu-title">Column 4</h2>
              <ul className="vertical-menu">
                <li><a href="#">Example 16</a></li>
                <li><a href="#">Example 17</a></li>
                <li><a href="#">Example 18</a></li>
                <li><a href="#">Example 19</a></li>
                <li><a href="#">Example 20</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Category