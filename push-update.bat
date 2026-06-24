@echo off
cd /d "C:\Users\lucas\Claude\Code\vector-site"
echo Agregando cambios...
git add vercel.json
git commit -m "fix: add vercel.json for SPA client-side routing"
echo Push a GitHub...
git push
echo.
echo === RESULTADO ===
git log --oneline -3
pause
