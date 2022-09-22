import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Antenne Bayern",
            artist: "German Radio",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/cb/60/3e/cb603ec8-f67d-d2ff-a681-cd81b127cd2b/source/512x512bb.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://s7-webradio.antenne.de/antenne",
            active: true,
        },
        {
            name:"80s 80s",
            artist: "fantompower",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/cb/60/3e/cb603ec8-f67d-d2ff-a681-cd81b127cd2b/source/512x512bb.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://80s80s.hoerradar.de/80s80s-mweb-mp3-hq",
            active: false,
        },
        {
            name:"Radio Paloma",
            artist: "Philanthrope, Parkbench Epiphany",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/cb/60/3e/cb603ec8-f67d-d2ff-a681-cd81b127cd2b/source/512x512bb.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://pool.radiopaloma.de/RADIOPALOMA.mp3?sABC=632po3o6%230%23p273ns5099s262746spprqr8nqsr66n0%23bayvarenqvbobk_arg&aw_0_1st.playerid=onlineradiobox_net&amsparams=playerid:onlineradiobox_net;skey:1663873974",
            active: false,
        },
        {
            name:"Rock Antenne",
            artist: "rock",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/cb/60/3e/cb603ec8-f67d-d2ff-a681-cd81b127cd2b/source/512x512bb.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://s4-webradio.antenne.de/rockantenne",
            active: false,
        },
        {
            name:"Clocks Forward",
            artist: "Psalm Trees, Guillaume Muschalle",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/cb/60/3e/cb603ec8-f67d-d2ff-a681-cd81b127cd2b/source/512x512bb.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8094",
            active: false,
        },
        {
            name:"Radio Sunshine-Live",
            artist: "dance techno",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/cb/60/3e/cb603ec8-f67d-d2ff-a681-cd81b127cd2b/source/512x512bb.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://sunshinelive.hoerradar.de/sunshinelive-mp3-128?sABC=632po405%230%23p273ns5099s262746spprqr8nqsr66n0%23fheszhfvx&aw_0_1st.playerid=surfmusik&amsparams=playerid:surfmusik;skey:1663874053",
            active: false,
        },
        {
            name:"Radio Heimatmelodie",
            artist: "folk",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/cb/60/3e/cb603ec8-f67d-d2ff-a681-cd81b127cd2b/source/512x512bb.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://rhm1.de/listen.mp3",
            active: false,
        },
        {
            name:"Deutschlandfunk",
            artist: "news talk",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/cb/60/3e/cb603ec8-f67d-d2ff-a681-cd81b127cd2b/source/512x512bb.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3?aggregator=onlineradiobox-com",
            active: false,
        },
        {
            name:"Bayern 1",
            artist: "pop talk",
            cover: "https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/cb/60/3e/cb603ec8-f67d-d2ff-a681-cd81b127cd2b/source/512x512bb.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://f121.rndfnk.com/ard/br/br1/obb/mp3/128/stream.mp3?aggregator=onlineradiobox-com&cid=01FB9ME7567MEQ5G72EVEEVVCS&sid=2F8WblBKCPs3Ac3TtV1yzDRVKI4&token=wqAtN-TdxWg34t0x_IhACD0VJeHBSXOs_oS1-tE7VSs&tvf=tmVJHXlYFxdmMTIxLnJuZGZuay5jb20",
            active: false,
        },
    ];
}

export default chillHop;


