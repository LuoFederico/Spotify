import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBnQUCjF3gyyd3FlbYTRreF0JB393K9VJ41BbDofNqIXzKXSqaeZUeyvMsUbokAVqrfIokg5Y4asRCDBvp_QAcpVD7YzxaTsQoUH6xQ2g_-aTPyrnDK5BlgbUojIQKlwlTK8RnMCT1I'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
   getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
       'Bearer BQBnQUCjF3gyyd3FlbYTRreF0JB393K9VJ41BbDofNqIXzKXSqaeZUeyvMsUbokAVqrfIokg5Y4asRCDBvp_QAcpVD7YzxaTsQoUH6xQ2g_-aTPyrnDK5BlgbUojIQKlwlTK8RnMCT1I'
    });

    return this.http.get(url, { headers });
  }
   getArtist(id : string){
    const url = `https://api.spotify.com/v1/artists/${id}`;
    const headers = new HttpHeaders({
      Authorization:
      'Bearer BQBnQUCjF3gyyd3FlbYTRreF0JB393K9VJ41BbDofNqIXzKXSqaeZUeyvMsUbokAVqrfIokg5Y4asRCDBvp_QAcpVD7YzxaTsQoUH6xQ2g_-aTPyrnDK5BlgbUojIQKlwlTK8RnMCT1I'});

    return this.http.get(url, { headers });
  }
  getAlbum(id : string){
    const url = `https://api.spotify.com/v1/albums/${id}`;
    const headers = new HttpHeaders({Authorization:'Bearer BQBnQUCjF3gyyd3FlbYTRreF0JB393K9VJ41BbDofNqIXzKXSqaeZUeyvMsUbokAVqrfIokg5Y4asRCDBvp_QAcpVD7YzxaTsQoUH6xQ2g_-aTPyrnDK5BlgbUojIQKlwlTK8RnMCT1I'});

    return this.http.get(url, { headers });
  }
//  getTopTracks(id : string){
  //  const url = `https://api.spotify.com/v1/artists/${id}/top-tracks`;
    //const headers = new HttpHeaders({Authorization:'Bearer BQBocX8PxUJVPqJ0eGVMvh3JsZMHzdVKvYSkD-RC7xHbs-sCC_j0aJCu2UxYTYjNBQfnVMTeBF_EZBv2LhTXSEadnCqiQoQLYPg2ADlrTD1gBo-BfjDVbI4KgGMJGTJbFRWE71xHSFUH'});

   // return this.http.get(url, { headers });
  //}

}
