export const Button = (onClick: any) => {
    return (
        <div onClick={onClick} className="flex w-full justify-center rounded-md p-3 mx-3 mt-3 shadow-md h-1/4">
            <div className="flex w-full justify-center items-center bg-primary rounded-lg mx-2 p-2">
                <h3 className="text-white text-xm font-inter">Nah! Find something else.</h3>
            </div>
        </div>
    );
};