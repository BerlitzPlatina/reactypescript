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
  const [count, setCount] = useState<number>(categories.length);

  useEffect(() => {
    getDataUserLogin().then(res => {
      setCategories(res.data)
      setCount(res.data.length)
    })
  }, [])

  return (
    <div className="dropdown-menu megamenu">
      <div className="megamenu-inner">
        <div className="row">
          {[...Array(7)].map((item, index) => {
            return (
              <div className="col-md-2">
                <ul className="vertical-menu">
                  {[...Array(count % 6)].map((item, index2) => {
                    return (
                      <li><a href="#">{categories[index * (count % 6) + index2].description}</a></li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Category