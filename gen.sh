cd mdx/mdx-kanji
rm index.ts
for f in *.mdx; 
do echo export '*' as $(basename ${f%.*}) from '"./'$f'"' >> index.ts; 
done;
echo 'const paths: string[] = [' >> index.ts;                                            
for f in *.mdx;
do
        echo '"'$(basename ${f%.*})'"'',' >> index.ts
done;
echo  ']' >> index.ts
echo 'export {paths}' >>  index.ts

cd ../../

cd mdx/mdx-component
rm index.ts
for f in *.mdx; 
do echo export '*' as $(basename ${f%.*}) from '"./'$f'"' >> index.ts; 
done;

cd ../../

cd mdx/mdx-single-page
rm index.ts
for f in *.mdx; 
do echo export '*' as $(basename ${f%.*}) from '"./'$f'"' >> index.ts; 
done;
echo   'const paths: string[] = [' >> index.ts;                                            
for f in *.mdx;
do
        echo '"'$(basename ${f%.*})'"'',' >> index.ts
done;
echo  ']' >> index.ts
echo 'export {paths}' >>  index.ts

cd ../../

cd mdx/mdx-kanji-list
rm index.ts
for f in *.mdx; 
do echo export '*' as $(basename ${f%.*}) from '"./'$f'"' >> index.ts; 
done;
echo   'const paths: string[] = [' >> index.ts;                                            
for f in *.mdx;
do
        echo '"'$(basename ${f%.*})'"'',' >> index.ts
done;
echo  ']' >> index.ts
echo 'export {paths}' >>  index.ts

cd ../../

cd mdx/mdx-word-list
rm index.ts
for f in *.mdx; 
do echo export '*' as $(basename ${f%.*}) from '"./'$f'"' >> index.ts; 
done;
echo   'const paths: string[] = [' >> index.ts;                                            
for f in *.mdx;
do
        echo '"'$(basename ${f%.*})'"'',' >> index.ts
done;
echo  ']' >> index.ts
echo 'export {paths}' >>  index.ts

cd ../../

cd public/images
rm index.ts
for f in *.*; 
do echo import $(basename ${f%.*}) from '"./'$f'"' >> index.ts; 
done;
echo 'export { ' >> index.ts;
for f in *.*;
do
        if [[ "$f" != "index.ts" ]]
        then
        echo $(basename ${f%.*})',' >> index.ts
        fi
done;
echo  ' }' >> index.ts

cd ../../
