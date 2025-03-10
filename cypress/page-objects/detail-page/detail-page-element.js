export class DetailPageElement {
    static get credentials() {
        return {
            get usernameTextbox() {
                return '//input[@placeholder="Input your email here"]';
            },
            get passwordTextbox() {
                return '//input[@placeholder="Input your password here"]';
            }
        };
    }

    static get seeRoomsButton() {
        return "//button[contains(text(), 'See Rooms')]";
        // return "//button[@class='inline-flex items-center justify-center px-4 py-2 font-semibold focus:outline-none focus-visible:ring focus-visible:ring-pelarous-60 shadow-sm transition-colors duration-75 bg-pelarous-60 border border-pelarous-60 hover:bg-pelarous-80 hover:text-white active:bg-pelarous-50 disabled:border-none disabled:bg-pelarous-60/50 disabled:text-chalky-10 h-12 disabled:cursor-not-allowed bold-14 float-right mt-4 w-32 rounded-lg text-white']";
    }
    
    static selectRoom(room_name) {
        return "(//button[@type='button'][normalize-space()='Select'])[1]"
        // return `//h3[contains(text(), '${room_name})']/ancestor::div(//button[@type='button'][normalize-space()='Select'])[1]`;
        // return `//h3[contains(text(), '${room_name})']/following-sibling::div//button[@type='button'][contains(text(),'Select')]`
    }
    
    static get selectRoomTitle() {
        return "//section[@id='select-room']";
    }
    


    // static get invalidLoginMessage() {
    //     return '//div[@role="alert"]';
    // }
}
