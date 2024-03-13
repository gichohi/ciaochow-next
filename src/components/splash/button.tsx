export const Button = (onClick: any) => {
    return(
        <div onClick={onClick} className="flex justify-center w-3/4 my-20 py-2 items-center bg-white rounded-lg h-1/6">
            <h3 className="text-primary">Get Started</h3>
        </div>
    )
}