import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  producerDictionary: {[id:  number] : string} = {}
  providerDictionary: {[id: number] : string} = {}

  constructor()
  {
    this.producerDictionary[1] = "https://upload.wikimedia.org/wikipedia/commons/9/9c/IFF_Company_Logo.png"
    this.producerDictionary[2] = "https://www.fragrantica.es/images/nosevi/o.246.jpg"
    this.producerDictionary[3] = "https://pbs.twimg.com/profile_images/1220422395791470592/FwkBbeLV_400x400.jpg"
    this.producerDictionary[4] = "data:image/png;base64,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"
    this.producerDictionary[5] = "https://www.almazois.gr/wp-content/uploads/2019/11/almazois-pita-2020-dorothetes-sephora-logo.png"


    this.providerDictionary[1] = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp5IhVbVajAdAAqr6qjoTuEFFG1EvduiwyxA&usqp=CAU"
    this.providerDictionary[2] = "https://m.europages.com/filestore/opt/logo/5f/c5/1e6317c535e8f93278aa00c4e585df39eaeb9b8f.png"
    this.providerDictionary[3] = "https://wffc.org/wp-content/uploads/2019/04/Privi_400x400.jpg"
    this.providerDictionary[4] = "https://www.hellocig.com/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/t/f/tfa-_60ml_1.jpg"
  }

  public getImageLink(id: number, _type: 'productor' | 'provider'): string {
    if (_type == 'productor')
      return this.producerDictionary[id]
    else
      return this.providerDictionary[id]
  }
}