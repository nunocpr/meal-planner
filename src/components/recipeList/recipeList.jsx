import React, {
  useRef
} from "react";

const RecipeList = () => {

  const storage = useRef(localStorage);

  /*   useEffect(() => {
      console.log(storage)
    }, [storage])
   */

  return (
    <div className="recipe-list">
      <ul>

      </ul>
    </div>
  )
}

export default RecipeList;