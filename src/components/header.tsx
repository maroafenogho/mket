type Props = {
    text: string,
    style?: string
}
export const AppHeaderText = ({ text, style }: Props) => {
    return (
        <div className={style ?? "text-2xl font-bold text-center text-teal-600"} >
            {text}
        </div>
    );
}