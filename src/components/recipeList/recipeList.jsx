import React, {
  useRef,
  useEffect
} from "react";

const RecipeList = () => {

  const storage = useRef(localStorage);

  useEffect(() => {
    console.log(storage)
  }, [storage])

  console.log(storage)

  return (
    <div className="recipe-list">
      <ul>
        {console.log(storage.current)}
      </ul>
    </div>
  )
}

export default RecipeList;