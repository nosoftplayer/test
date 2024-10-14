import vimColors from "vim-colors";

// Well use this later

function poweredBy() {
	console.log("powered by vim");
}

class Theme {
	constructor(private name: string) {
		this.name = name
	}
	public static poweredBy() {
		poweredBy();
	}
	public getColorschemeName() {
		return this.name;
	}
}
export const theme = new Theme("mycolorscheme");
