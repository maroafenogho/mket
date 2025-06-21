const AppButton = ({ isLoading, buttonText }: { isLoading: boolean, buttonText: string }) => {
    return (
        <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded hover:bg-teal-500 transition disabled:opacity-50 flex justify-center items-center gap-2"
            disabled={isLoading}
        >
            {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

            ) : (
                buttonText
            )}
        </button>

    );
}

export default AppButton;