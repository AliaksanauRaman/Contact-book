import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { faStar as faSolidStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-toggle-star',
  templateUrl: './toggle-star.component.html',
  styleUrls: ['./toggle-star.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleStarComponent {
  @Input()
  public set isMarked(value: boolean) {
    this._isMarked = value;
    this.isMarkedClass = value;
  }

  public get isMarked(): boolean {
    return this._isMarked;
  }

  @Input()
  public useTitle = true;

  @HostBinding('class.marked')
  public isMarkedClass = false;

  @HostBinding('attr.title')
  public get title(): string {
    if (!this.useTitle) {
      return '';
    }

    return this.isMarked
      ? 'Убрать из избранного'
      : 'Добавить в избранное';
  }

  private _isMarked = false;

  public get starIcon(): IconDefinition {
    return this.isMarked ? faSolidStar : faRegularStar;
  }
}
