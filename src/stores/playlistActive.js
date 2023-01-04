import { defineStore } from "pinia";
import { randomSongs } from '../data/playlists'

export const usePlaylistActive = defineStore('usePlaylistActive', {
    state: () => {
        return {
            disable: true,
            randomList: randomSongs,
            currentIndex: 0,
            musicActive: {
                name: 'Artista desconhecido',
                band: 'None',
                music: {
                    banner: '/src/assets/imgs/banners/gatinhodorock.jpg',
                    url: '',
                }
            },
            playlist: []
        }
    },
    actions: {
        alterMusic() {
            return this.musicActive = this.playlist[this.currentIndex]
        },
        nextMusic() {

            if(this.disable) return

            if (!this.playlist.length && this.musicActive) {

                this.playlist.push(this.musicActive)
                
                this.randomList.filter((item) => {
                    this.playlist.push(item)
                })
            
            }

            if(this.currentIndex == this.playlist.length - 1) return
            
            this.currentIndex++
            this.alterMusic()

        },
        comeBackMusic() {

            if(this.disable) return
        
            if (!this.playlist.length) return
            if(this.currentIndex == 0) return
            
            this.currentIndex--
            this.alterMusic()
        
        },
        setNewMusic(song) {
            this.currentIndex = 0
            this.disable = false
            this.playlist = []
            this.musicActive = song

        }
    }
})