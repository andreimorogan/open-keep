"use client";

type WrapperProps = {
    children: React.ReactNode
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div className="p-6 mt-9 flex-1">
            {children}
        </div>
    );
};

export default Wrapper;