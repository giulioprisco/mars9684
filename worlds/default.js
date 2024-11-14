// mars9684
// A small base in a crater on Mars.
// Mars is being terraformed so your avatar doesn't have to wear a spacesuit, but it helps.
// There is a multiversal memorial to Elon Musk's Tesla Roadster, which crashed on Mars
// in some parallel world
// Made with Croquet Microverse.
// https://croquet.io
// See behaviors/terrain.js for terrain specs.


export function init(Constants) {
    Constants.AvatarNames = ["newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"].map((n) => ({
        type: "3d",
        name: n,
        modelType: "glb",
        avatarType: "wonderland",
        dataLocation: `./assets/avatars/${n}.zip`,
        dataRotation: [0, Math.PI, 0],
        dataScale: [0.3, 0.3, 0.3],
        behaviorModules: ["HillsideWalker"]
    }));

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "terrain.js", "menus.js", "urlLink.js", "replaceWorld.js", "walker.js"
    ];


    // rotates an object around a center point.
    function rotateTo(center, length, angle){
        let pos = [];
        pos.push(length*Math.sin(angle));
        pos.push(0);
        pos.push(length*Math.cos(angle));
        pos[0]+=center[0];
        pos[1]=center[1];
        pos[2]+=center[2];
        return pos;
    }

    Constants.DefaultCards = [

	
	{
            card: {
                name: "entrance",
                type: "object",
                translation: [0, -27, 0],
                rotation: [0, 0, 0],
		spawn: "default",
            }
        },
        


        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Lights"],
                dataType: "jpg",
                dataLocation: "./assets/sky/mars-sky.jpg",
                attribution: "",
                clearColor: 0xffffff,
                loadSynchronously: true,
            }
        },


        {
            card: {
                name:"Terrain",
                behaviorModules: ["Terrain", "Menus"],
                layers: ["terrain"],
                type: "object",
                translation:[0, 0, 0],
                shadow: true,
                attribution: "xxx",
            }
        },


{
           card: {
                name: "spacex starship",
                translation: [-75, -92.5, -100],
                scale: [1, 1, 1],
                rotation: [0, 0, 0, 0],
                layers: ["pointer", "walk"],
                name: "/spacex_starship_ship_s25__booster_9.glb",
                dataLocation: "./assets/3D/spacex_starship_ship_s25__booster_9.glb",
                dataScale: [1, 1, 1],
                fileName: "/spacex_starship_ship_s25__booster_9.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                attribution: "clarence365 at sketch fab",
	    }

      	},


{


            card: {
		  	translation: [40, -29, -80],
			scale: [1, 1, 1],
			rotation: [0, -Math.PI/2, 0],
			layers: ["pointer", "walk"],
			name: "/army_hangar_ready_for_unreal_engine.glb",
			dataLocation: "./assets/3D/army_hangar_ready_for_unreal_engine.glb",
			fileName: "/army_hangar_ready_for_unreal_engine.glb",
			modelType: "glb",
			shadow: false,
			singleSided: true,    type: "3d",
                        attribution: "G4AGamingLabs at sketch fab",
            }
	},

{


            card: {
		  	translation: [40, -29, -100],
			scale: [1, 1, 1],
			rotation: [0, -Math.PI/2, 0],
			layers: ["pointer", "walk"],
			name: "/army_hangar_ready_for_unreal_engine.glb",
			dataLocation: "./assets/3D/army_hangar_ready_for_unreal_engine.glb",
			fileName: "/army_hangar_ready_for_unreal_engine.glb",
			modelType: "glb",
			shadow: false,
			singleSided: true,    type: "3d",
                        attribution: "G4AGamingLabs at sketch fab",
            }
	},

{


            card: {
		  	translation: [40, -29, -120],
			scale: [1, 1, 1],
			rotation: [0, -Math.PI/2, 0],
			layers: ["pointer", "walk"],
			name: "/army_hangar_ready_for_unreal_engine.glb",
			dataLocation: "./assets/3D/army_hangar_ready_for_unreal_engine.glb",
			fileName: "/army_hangar_ready_for_unreal_engine.glb",
			modelType: "glb",
			shadow: false,
			singleSided: true,    type: "3d",
                        attribution: "G4AGamingLabs at sketch fab",
            }
	},


{
           card: {
                name: "Tesla-roadster",
                translation: [0, -27.75, -10],
                scale: [1.5, 1.5, 1.5],
                rotation: [0, 3*Math.PI/4, 7*Math.PI/8],
                layers: ["pointer", "walk"],
                name: "tesla_roadster_2020.glb",
                dataLocation: "./assets/3D/tesla_roadster_2020.glb",
                dataScale: [1, 1, 1],
                fileName: "/tesla_roadster_2020.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                attribution: "metarex.4d at sketch fab",
	    }

      	},

{
            card: {
                name: "image card",
                translation: [-5, -27, -13],
                rotation: [0, 0, 0],
		layers: ["pointer", "walk"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/mars9684intro.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },

{
            card: {
                name: "Teleport",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldTargetURL: "https://giulioprisco.github.io/spaceport9684/",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                translation: [-5, -27, -13.3],
                rotation: [0, Math.PI, 0],
                layers: ["pointer", "walk"],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/teleportspaceport9684.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        
        
    ];
}
