class HomePageConstant {
    constructor() {
        const prefix = Cypress.env("constantPrefix");

        this.bobopod = Object.freeze({
            alun2Bdg: `${prefix}Bobopod Alun-Alun, Bandung`,
            paskal: `${prefix}Bobopod Paskal, Bandung`,
            cipaganti: `${prefix}Bobopod Cipaganti, Bandung`,
            dago: `${prefix}Bobopod Dago, Bandung`,
            alun2Mlg: `${prefix}Bobopod Alun-Alun, Malang`,
            megaMall: `${prefix}Bobopod Mega Mall, Bekasi`,
            kotaTua: `${prefix}Bobopod Kota Tua, Jakarta`,
            tanahAbang: `${prefix}Bobopod Tanah Abang, Jakarta`,
            juanda: `${prefix}Bobopod Juanda, Jakarta`,
            thamrin: `${prefix}Bobopod Thamrin, Jakarta`,
            itcKuningan: `${prefix}Bobopod ITC Kuningan, Jakarta`,
            pancoran: `${prefix}Bobopod Pancoran, Jakarta`,
            kebayoranBaru: `${prefix}Bobopod Kebayoran Baru, Jakarta`,
            kotaLama: `${prefix}Bobopod Kota Lama, Semarang`,
            slametRiyadi: `${prefix}Bobopod Slamet Riyadi, Solo`,
            airportCBC: `${prefix}Bobopod Airport CBC, Tangerang`,
            malioboro: `${prefix}Bobopod Malioboro, Yogyakarta`,
        });

        this.bobocabin = Object.freeze({
            cikole: `${prefix}Bobocabin Cikole, Bandung`,
            pangalengan: `${prefix}Bobocabin Pangalengan, Bandung`,
            rancaUpas: `${prefix}Bobocabin Ranca Upas, Bandung`,
            sukawana: `${prefix}Bobocabin Sukawana, Bandung`,
            kawahCiwidey: `${prefix}Bobocabin Kawah Ciwidey, Bandung`,
            baturraden: `${prefix}Bobocabin Baturraden, Purwokerto`,
            ijen: `${prefix}Bobocabin Ijen, Banyuwangi`,
            gunungMas: `${prefix}Bobocabin Gunung Mas, Puncak`,
            tavia: `${prefix}Bobocabin The Tavia, Puncak`,
            dieng: `${prefix}Bobocabin Dieng, Wonosobo`,
            rinjani: `${prefix}Bobocabin Gunung Rinjani, Lombok`,
            bunaken: `${prefix}Bobocabin Bunaken Hills, Manado`,
            cabanRondo: `${prefix}Bobocabin Coban Rondo, Malang`,
            pacet: `${prefix}Bobocabin Pacet, Mojokerto`,
            madasari: `${prefix}Bobocabin Madasari, Pangandaran`,
            umarato: `${prefix}Bobocabin Umarato, Sumba`,
            patraParapat: `${prefix}Bobocabin Patra Parapat, Toba`,
            kaldera: `${prefix}Bobocabin Kaldera, Toba`,
            ubud: `${prefix}Bobocabin Ubud, Bali`,
        });
    }
}

export default HomePageConstant;
