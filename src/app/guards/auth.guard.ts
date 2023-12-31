import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (): boolean => {
  const token = localStorage.getItem('tokenAccess');
  const router = inject(Router);
  console.log(token);
  if (token === 'axAdmin') {
    return true;
  }
  console.log('Sin acceso');
  router.navigate(['login']);
  return false;
};
