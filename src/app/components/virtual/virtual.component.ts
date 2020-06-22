import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  personas = Array(500).fill(0);

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  constructor() { }

  ngOnInit(): void {
  }

  irAlFinal(){
    this.viewport.scrollToIndex( this.personas.length);
  }

  irAlInicio(){
    this.viewport.scrollToIndex( 0 );
  }

  irMitad(){
    this.viewport.scrollToIndex( this.personas.length / 2);
  }

}
