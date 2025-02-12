import React from "react"
function MealDetails({ params }: {
    params: {
        mealId: string
    }
}) {

    return (
        <>
            <div>Mela Detailks</div>
            <h3>{params?.mealId}</h3>
        </>
    )
}
export default MealDetails