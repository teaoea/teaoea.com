import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  English() {
    window.location.href = 'https://teaoea.com';
  }

  SimplifiedChinese() {
    window.location.href = 'https://zh.teaoea.com';
  }

  TraditionalChinese() {
    window.location.href = 'https://hk.teaoea.com';
  }

  about() {
    this.router.navigate(['/about'], {relativeTo: this.route}).then();
  }
}
