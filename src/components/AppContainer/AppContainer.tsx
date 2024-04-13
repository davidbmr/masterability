import { MainFooter } from "../MainFooter/MainFooter";
import { MainHeader } from "../MainHeader/MainHeader";
import style from "./AppContainer.module.css";

interface Props {
	children: React.ReactNode;
}

export const AppContainer = ({ children }: Props) => {
	return (
		<div className={style.appContainer__container}>
			<MainHeader />
			<div className={style.appContainer__children}>{children}</div>
			<MainFooter />
		</div>
	);
};
