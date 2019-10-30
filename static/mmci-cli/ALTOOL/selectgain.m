function [bp]=selectgain(names,models,epsilon)
global bp S;

S.fh = figure('units','pixels',...
              'menubar','none',...
              'position',[400 400 220 180],...
              'name','Choice of gain parameter',...
              'numbertitle','off',...
              'resize','off');
S.t1 = uicontrol('style','text',...
                 'unit','pix',...
                 'position',[10 130 200 40],...
                 'string','You have selected the following model with Adaptive Learning');
S.t2 = uicontrol('style','text',...
                 'unit','pix',...
                 'position',[10 100 200 20],...
                 'string',num2str(names(models(epsilon),:)));
S.t3 = uicontrol('style','text',...
                 'unit','pix',...
                 'position',[10 70 200 20],...
                 'string','Select the gain parameter from (0,0.05)');
S.e = uicontrol('style','edit',...
                 'unit','pix',...
                 'position',[10 40 200 20],...
                 'string','0.01');
S.p = uicontrol('style','push',...
                 'unit','pix',...
                 'position',[10 10 200 20],...
                 'string','OK', ...
                 'callback', {@save_gain}); 

uiwait;
 
end