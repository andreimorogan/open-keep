"use client";

type WrapperProps = {
    children: React.ReactNode
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div className="p-6 mt-14 flex-1">
            {children}
        </div>
    );
};

export default Wrapper;