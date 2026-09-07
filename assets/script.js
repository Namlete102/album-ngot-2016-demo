 // Database lưu trữ lời bài hát dưới dạng chuẩn LRC ([mm:ss.xx] Lời bài hát)
    const lyricsStore = {
      // 0: Ngọt - Vì Ai (Đã cập nhật chính xác từng timeline)
      0: `[00:23.43] Bao năm bôn ba thường quen sống đơn côi
[00:26.66] Nay thân anh hao gầy ăn mãi không trôi
[00:29.20] Vì ai ngoài em?
[00:32.47] Vì ai ngoài em?
[00:36.14] Lênh đênh lênh đênh vượt bão tố phong ba
[00:39.17] Đêm đêm anh ôm đàn sáng sớm anh ra ngoài hiên chờ em
[00:45.27] Chờ ai ngoài em
[00:47.91] Có lẽ em đang rất gần, thế nhưng anh không thấy em
[00:54.20] Vì sau bao khó khăn cũng đâu có ý nghĩa gì
[01:00.44] Có lẽ anh nên quay về, để em yên trong kiếp này
[01:06.92] Hẹn gặp em kiếp sau biết đâu sẽ đẹp đôi hơn (eh-eh-eh)
[01:15.47] 
[01:26.47] Lang thang lang thang mình anh giữa ban trưa
[01:29.62] Quên mang theo ô mình anh dưới cơn mưa
[01:32.53] Tìm ai ngoài em?
[01:35.74] Tìm ai ngoài em?
[01:39.13] Quán nước nơi anh ngồi hai tiếng trông mong
[01:42.40] Hai chai Coca và hai điếu Thăng Long
[01:45.29] Chờ ai ngoài em?
[01:48.29] Chờ ai ngoài em?
[01:51.17] Có lẽ em đang rất gần, thế nhưng anh không thấy em
[01:57.27] Vì sau bao khó khăn cũng đâu mang ý nghĩa gì
[02:03.63] Có lẽ anh nên quay về, để em yên trong kiếp này
[02:09.85] Hẹn gặp em kiếp sau biết đâu sẽ đẹp đôi hơn (eh-eh-eh)
[02:18.15] Và trong những cơn say
[02:21.52] Hay những lúc nơi đây không còn phân cách giữa gian nhà và đường phố
[02:28.48] Là một cơ hội để anh tìm lại anh như chuyến xe tìm về bến đỗ thân quen (bến đỗ thân quen)
[02:34.59] Mà có biết đâu con đường anh đi hôm nay dường như ngược chiều
[02:39.40] Đồng hồ điểm ba giờ sáng
[02:46.08] 
[02:55.74] La-la-la-la-la-la-la-la-la
[02:58.91] La-la-la-la-la-la-la-la-la
[03:01.87] La-la la-la
[03:04.77] La-la la-la
[03:08.27] La-la-la-la-la-la-la-la-la
[03:11.47] La-la-la-la-la-la-la-la-la
[03:14.44] La-la-la-la
[03:17.50] La-la-la-la-la-la-la
[03:21.23] `,

      1: `[00:00.85] Nơi nhân gian sum vầy
[00:03.19] Anh có nghe thấy
[00:05.34] Tiếng réo gọi tâm hồn
[00:27.71] Cho tôi đi theo với
[00:30.05] Nơi anh đi về
[00:32.31] Về nơi đẹp trời hơn
[00:34.60] Tràn đầy đam mê
[00:36.90] Tôi quên đi năm tháng
[00:39.26] Yêu thương không còn
[00:41.53] Cần thêm mùi rượu vang
[00:43.74] Và đồ ăn ngon
[00:45.92] Nơi nhân gian sum vầy
[00:48.19] Anh có nghe thấy
[00:50.49] Tiếng réo gọi tâm hồn
[00:52.75] Ngân vang đâu đây
[00:54.98] Nơi nhân gian sum vầy
[00:57.25] Anh có nghe thấy
[00:59.60] Tiếng réo gọi tâm hồn
[01:01.80] Ngân vang đâu đây
[01:21.89] Trong cơn mơ tôi thấy
[01:24.30] Nơi anh đi về
[01:26.69] Trên con đường đầy hoa
[01:28.98] Dù dài lê thê
[01:31.27] Mỗi giây tôi đi tìm tâm hồn tôi là mây chốn nao
[01:35.83] Âm thanh của thành phố
[01:38.01] Ngày càng lên cao
[01:40.32] Nơi nhân gian sum vầy
[01:42.54] Anh có nghe thấy
[01:44.81] Tiếng réo gọi tâm hồn
[01:47.13] Ngân vang đâu đây
[01:49.39] Nơi nhân gian sum vầy
[01:51.67] Anh có nghe thấy
[01:53.85] Tiếng réo gọi tâm hồn
[01:56.13] Ngân vang đâu đây oh hoh
[02:16.09] Cho tôi đi theo với
[02:18.31] Nơi anh đi về
[02:20.49] Về nơi đẹp trời hơn
[02:22.79] Tràn đầy đam mê
[02:25.14] Tôi quên đi năm tháng
[02:27.08] Yêu thương không còn
[02:29.51] Cần thêm mùi rượu vang
[02:31.79] Và đồ ăn ngon
[02:34.06] Nơi nhân gian sum vầy
[02:36.37] Anh có nghe thấy
[02:38.80] Tiếng réo gọi tâm hồn
[02:40.90] Ngân vang đâu đây
[02:43.29] Nơi nhân gian sum vầy
[02:45.57] Anh có nghe thấy
[02:47.88] Tiếng réo gọi tâm hồn
[02:50.14] Ngân vang đâu đây`,

      2: `[00:08.79] Cá hồi bơi ngược dòng nước dữ dội
[00:16.55] Đời phiêu du mệt mỏi rồi chết
[00:26.07] Sống từng năm chọn sóng gió làm nhà
[00:33.63] Chẳng quan tâm bao giờ gục ngã
[00:42.99] Cá hồi
[00:45.37] Sao không thương cho mình một lúc
[00:52.14] Sao không đưa phận mình
[00:54.51] Buông tay cho dòng suối thân
[01:18.87] Nghĩ thật vui được làm kiếp con người (thật vui được làm kiếp con người thật vui được làm kiếp con người)
[01:26.64] Dừng chân sau mỗi lần kiệt sức (thật vui được làm kiếp con người thật vui được làm kiếp con người)
[01:36.83] Nghĩ thật may được làm kiếp con người
[01:44.52] Chẳng quan tâm nếu chọn đường dễ dàng
[01:54.13] Cá hồi
[01:56.47] Sao không thương cho mình một lúc
[02:03.14] Sao không đưa phận mình
[02:05.57] Buông tay cho dòng suối thân oh
[02:11.96] Cá hồi
[02:14.41] Không vô tâm như người ta sống
[02:20.99] Sao không đưa phận mình
[02:23.53] Buông tay cho dòng suối thân
[02:30.07] Sao không đưa phận mình
[02:32.65] Buông tay cho dòng suối thân
[03:05.74] Nghĩ thật vui được làm kiếp con người
[03:10.00] Nghĩ thật vui được làm kiếp con người
[03:14.44] Nghĩ thật vui được làm kiếp con người
[03:18.71] Nghĩ thật may được làm kiếp con người
[03:23.07] Nghĩ thật vui được làm kiếp con người
[03:27.66] Nghĩ thật may được làm kiếp con người
[03:31.85] Nghĩ thật vui được làm kiếp con người
[03:36.21] Nghĩ thật may được làm kiếp con người
[03:40.65] Nghĩ thật vui được làm kiếp con người
[03:45.16] Nghĩ thật may được làm kiếp con người
[03:49.53] Nghĩ thật vui được làm kiếp con người
[03:53.97] Nghĩ thật may được làm kiếp con người
[03:58.61] Nghĩ thật vui được làm kiếp con người
[04:02.94] Nghĩ thật may được làm kiếp con người
[04:07.45] Nghĩ thật vui được làm kiếp con người
[04:11.84] Nghĩ thật may được làm kiếp con người
[04:16.46] Nghĩ thật vui được làm kiếp con người`, 

3: `[00:11.82] Biết bao giờ cho tôi nên người
[00:15.29] Bao giờ cho tôi hết lười
[00:18.55] Bao giờ cho tôi khôn lớn như tôi từng hứa
[00:24.93] Muốn bé lại nhưng không có quyền
[00:28.17] Muốn được lớn nhưng không có tiền
[00:31.55] Muốn được vui nhưng không có lý do không còn nữa
[00:37.73] Chỉ còn ban nhạc tôi
[00:41.21] Một thế giới bé nhỏ thôi
[00:44.35] Một niềm tin mất thời gian nhưng tôi không quan tâm
[00:50.79] Chẳng còn phút thảnh thơi
[00:54.30] Bận cà phê bận chơi
[00:57.45] Để năm tháng cứ quay vòng quay nhưng tôi không quan tâm
[01:04.59] Be cool
[01:11.12] Be cool
[01:14.28] Yeah
[01:17.13] Có khi nào tôi quên mất mình
[01:20.40] Khi nào trong thâm tâm bất bình
[01:23.68] Khi mà giao thừa sang năm mới cũng như năm cũ
[01:30.29] Sẽ có ngày cho tôi khác biệt
[01:33.43] Có ngày quên đi quá khứ chết tiệt
[01:36.98] Có ngày tôi được như những đứa xung quanh so cool
[01:43.32] Chỉ còn ban nhạc tôi
[01:46.65] Một thế giới bé nhỏ thôi
[01:49.94] Một niềm tin mất thời gian nhưng tôi không quan tâm
[01:56.29] Chẳng còn phút thảnh thơi
[01:59.96] Bận cà phê bận chơi
[02:03.22] Để năm tháng cứ quay vòng quay nhưng tôi không quan tâm
[02:09.87] Không quan tâm ha
[02:22.86] Biết bao giờ cho tôi nên người
[02:26.41] Bao giờ cho tôi hết lười
[02:29.65] Bao giờ cho tôi khôn lớn như tôi từng hứa
[02:36.03] Chỉ còn ban nhạc tôi
[02:39.55] Một thế giới bé nhỏ thôi
[02:42.72] Một niềm tin mất thời gian nhưng tôi không quan tâm
[02:49.20] Chẳng còn phút thảnh thơi
[02:52.82] Bận cà phê bận chơi
[02:56.13] Để năm tháng cứ quay vòng quay vòng quay vòng quay vòng quay vòng quay
[03:08.74] Be cool
[03:15.30] Be cool
[03:18.49] Yeah`,

4: `[00:16.56] Xanh
[00:18.46] Mơ một giấc mơ màu xanh
[00:22.12] Âm nhạc lướt đi thật nhanh
[00:25.72] Như một thói quen của anh
[00:29.48] Con đường màu xanh
[00:33.05] Xanh màu lá xanh đại dương
[00:36.77] Em là nắng anh là sương
[00:40.46] Không còn nhớ không còn thương
[00:44.08] Thiên đường
[00:46.83] Cho tới khi
[00:48.65] Báo thức bắt anh quay về thực tế
[00:53.37] Cho một giây vượt qua giấc mơ chợt quên chợt quên đi
[00:58.57] Chuyện tình hư cấu
[01:01.43] Anh ngáp dài
[01:03.25] Giấu giấc mơ em sâu vào chăn gối
[01:07.98] Xanh thật xanh một câu hát ru rồi phai nhòa phai nhòa trong ban sơ
[01:16.46] Chỉ khi con mắt kéo anh vào đêm tối
[01:20.13] Không có thời gian cho anh từ chối
[01:23.73] Anh mới nhận ra những gì mình quên lãng
[01:27.42] Nơi ta gặp nhau đó đây cùng năm tháng
[01:31.05] Nhiều khi anh đã cố đi tìm vội vã
[01:34.62] Để có một giây viết lên tình ca
[01:38.14] Em đi lặng lẽ rất nhanh vượt qua anh
[01:41.92] Giờ anh nhìn thấy bóng em bên trong màu xanh
[01:48.32] Ah
[01:52.86] Xanh
[01:54.84] Như màu áo phông của anh
[01:58.52] Như làn nước cá lượn quanh
[02:02.21] Như một đóa hoa màu xanh
[02:05.85] Trong lành
[02:23.22] Cho tới khi
[02:25.10] Báo thức bắt anh quay về thực tế
[02:29.58] Cho một giây vượt qua giấc mơ chợt quên chợt quên đi
[02:34.75] Chuyện tình hư cấu
[02:37.73] Anh ngáp dài
[02:39.61] Giấu giấc mơ em sâu vào chăn gối
[02:44.08] Xanh thật xanh một câu hát ru rồi phai nhòa phai nhòa trong ban sớm
[02:52.65] Chỉ khi con mắt kéo anh vào đêm tối
[02:56.39] Không có thời gian cho anh từ chối
[03:00.07] Anh mới nhận ra những gì mình quên lãng
[03:03.67] Nơi ta gặp nhau đó đây cùng năm tháng
[03:07.29] Nhiều khi anh đã cố đi tìm vội vã
[03:10.97] Để có một giây viết lên tình ca
[03:14.59] Em đi lặng lẽ rất nhanh vượt qua anh
[03:18.27] Giờ anh nhìn thấy bóng em bên trong màu xanh ah
[03:25.74] Ah oh
[03:35.94] Chỉ khi con mắt kéo anh vào đêm tối
[03:39.45] Không có thời gian cho anh từ chối
[03:42.93] Anh mới nhận ra những gì mình quên lãng
[03:46.58] Nơi ta gặp nhau đó đây cùng năm tháng
[03:50.06] Nhiều khi anh đã cố đi tìm vội vã
[03:53.78] Để có một giây viết lên tình ca
[03:57.45] Em đi lặng lẽ rất nhanh vượt qua anh
[04:01.08] Giờ anh nhìn thấy bóng em ah
[04:05.02] Khi con mắt kéo anh vào đêm tối (hoh)
[04:08.25] Không có thời gian cho anh từ chối
[04:11.42] Anh mới nhận ra những gì mình quên lãng (hoh)
[04:15.39] Nơi ta gặp nhau đó đây cùng năm tháng
[04:18.69] Nhiều khi anh đã cố đi tìm vội vã
[04:22.50] Để có một giây viết lên tình ca
[04:26.14] Em đi lặng lẽ rất nhanh vượt qua anh
[04:29.65] Giờ anh nhìn thấy bóng em bên trong màu xanh
[04:39.60] Ah`, 

5:`[00:13.74] Bé thơ nghe mẹ ru hời
[00:18.14] Ơi à ơi
[00:21.41] Lời theo gió đưa nhẹ
[00:28.06] Ngủ đi cho quên cái đời
[00:31.98] Ơi à ơi
[00:34.97] Lời ai cũ tìm về
[00:41.69] Ơi à ơi à ơi
[00:48.27] Ơi à ơi à ơi
[00:51.75] Mấy năm ăn hại cơm trời
[01:11.38] Ơi à ơi
[01:14.04] Giờ đã lớn khôn rồi
[01:20.53] Ngủ đi cho quên cái đời
[01:24.22] Ơi à ơi
[01:27.58] Lời ai ru tuyệt vời
[01:34.57] Ơi à ơi à ơi
[01:40.84] Ơi à ơi à ơi
[01:48.06] Những đêm đông khóc òa
[01:53.75] Những trưa hè khó xóa nhòa
[01:59.84] Ngủ đi cho quên cái đời
[02:06.00] Ngủ đi cho quên
[02:19.06] Mấy năm ăn hại cơm trời
[02:24.11] Ơi à ơi
[02:27.27] Giờ đã lớn khôn rồi
[02:33.94] Ngủ đi cho quên cái đời
[02:37.28] Ơi à ơi
[02:40.72] Lời ai ru tuyệt vời, ai ru tuyệt vời
[02:54.74] Ơi à ơi à ơi
[03:00.52] Ơi à ơi à ơi
[03:07.01] Ơi à ơi à ơi
[03:13.96] `, 

6:`[00:30.36] Thành phố Huế trong mưa triền miên
[00:33.12] Cùng đàn lữ khách đang trôi dọc theo bãi bờ
[00:37.75] Dọc theo bãi bờ
[00:41.70] Tôi đi qua vì tôi tò mò
[00:44.10] Và tôi vô tư vượt qua chuyến đò sang sông
[00:51.24] Hm
[00:53.79] Những chuyến phiêu lưu
[00:56.96] Hm
[00:59.64] Những chuyến phiêu lưu
[01:02.92] Từ phương Nam ngược về phương Bắc
[01:05.59] Qua những nơi mà tôi không chắc sẽ quay trở về
[01:36.17] Tìm thấy nắng sau hai ngày sương
[01:38.60] Và tìm thấy gió trong đêm làm tôi rất mừng
[01:43.69] Làm tôi rất mừng
[01:47.38] Tôi không hâm và tôi không nhầm
[01:49.88] Thì tôi kiếp trước là cây của rừng bao la
[01:57.20] Hm
[01:59.74] Những chuyến phiêu lưu
[02:02.78] Hm
[02:05.25] Những chuyến phiêu lưu
[02:08.50] Từ phương Nam ngược về phương Bắc
[02:11.39] Qua những nơi mà tôi không chắc sẽ quay trở về
[02:19.36] Hm
[02:21.96] Những chuyến phiêu lưu
[02:25.24] Hm
[02:27.72] Những chuyến phiêu lưu
[02:30.81] Từ phương Nam ngược về phương Bắc
[02:33.69] Qua những nơi mà tôi không chắc sẽ quay trở về
[02:40.24] Sẽ quay trở về`, 

7:`[00:32.88] Khắp xung quanh
[00:35.31] Tôi quay đầu
[00:37.27] Bốn phương trời
[00:39.52] Người và xe
[00:41.78] Tôi không thấy
[00:43.65] Tôi không nói
[00:45.66] Tôi không nghe
[00:49.65] Khắp xung quanh
[00:52.10] Đang chê cười
[00:53.79] Lối đi này
[00:56.23] Đầy cheo leo
[00:58.35] Không ai biết
[01:00.17] Không ai dắt
[01:02.30] Không ai theo
[01:05.95] Đường dài không cuối không đầu
[01:10.16] Có mấy ai vượt khó
[01:14.32] Đường dài không cuối không đầu
[01:18.67] Có mấy ai trở về
[01:39.55] Heh hoh
[01:48.18] Khắp nơi nơi
[01:50.28] Không ai nhìn
[01:52.14] Những con người
[01:54.55] Chẳng ai tin
[01:56.79] Không ai biết
[01:58.87] Không ai khiến
[02:00.87] Không ai xin
[02:02.84] Hoh
[02:04.70] Khắp xung quanh
[02:07.04] Tôi đi tìm
[02:09.00] Những tấm lòng
[02:11.32] Của không ai
[02:13.50] Không ai nói
[02:15.43] Không ai đúng
[02:17.48] Không ai sai
[02:21.12] Đường dài không cuối không đầu
[02:25.38] Có mấy ai vượt khó
[02:29.59] Đường dài không cuối không đầu
[02:33.76] Có mấy ai trở về
[02:39.75] Những mắt xích trên con đường tôi đi
[02:47.89] Cứ thế kéo tôi ra khỏi an nguy tôi từng có
[03:06.68] Hoh cuối cuối
[03:11.35] Đường dài không cuối không đầu
[03:15.51] Có mấy ai vượt khó
[03:19.84] Đường dài không cuối không đầu
[03:24.22] Có mấy ai trở về heh oh woh
[03:28.46] Có mấy ai trở về heh yeah oh woh
[03:36.78] Đường dài không cuối không đầu
[03:41.02] Có mấy ai trở về`, 

8: `[00:20.37] Ôi mấy năm nay tôi vui chơi nhiều
[00:25.24] Ôi mấy năm nay xung quanh toàn tình yêu
[00:30.26] Ôi mấy năm nay gặp may gặp may
[00:35.15] Tôi thấy như tôi thật hay thật hay
[00:40.04] Mẹ tôi đưa tôi đi chơi bờ hồ
[00:44.90] Nếu tôi không muốn thì tôi sẽ khóc
[00:49.86] Tôi mới lên ba, lên ba, lên ba
[00:54.71] Đi chơi bờ hồ, ngồi trên ghế đá không làm gì
[01:02.25] 
[01:16.48] Ôi sáng nay sao tôi thấy tồi tệ?
[01:21.54] Ôi sáng nay sao tôi dậy muộn thế?
[01:26.38] Ôi sáng nay sao, làm sao làm sao?
[01:31.21] Mơ thấy ai treo đầu tôi lên cao
[01:36.04] Tôi phóng ra xe, hôm nay đi học
[01:41.12] Nếu tôi còn bé thì tôi sẽ khóc
[01:46.01] Nhưng đã hai mươi, hai mươi, hai mươi
[01:50.96] Lên xe đi học, để ngồi lên ghế không làm gì
[01:57.75] 
[02:02.26] Để không làm gì
[02:11.55] Để không làm gì
[02:18.42] (Hai, ba, bốn, năm, sáu)
[02:20.52] 
[02:36.27] Ôi suốt năm nay tôi đã làm gì?
[02:41.12] Trong suốt năm nay tôi cứ về rồi đi
[02:46.19] Cứ thế tôi đi, đi đến công ty
[02:51.03] Năm tháng vui chơi biệt li, biệt li
[02:55.72] Tôi phóng ra xe, hôm nay đi làm
[03:00.67] Nếu tôi còn bé thì tôi sẽ khóc
[03:05.49] Nhưng đã ba mươi, ba mươi, ba mươi
[03:10.20] Lên xe đi làm, lại ngồi lên ghế không làm gì
[03:16.76] 
[03:21.41] Để không làm gì
[03:30.72] Để không làm gì
[03:40.02] Để không làm gì
[03:49.10] Để không làm gì
[03:56.49] `,

9:`[00:21.96] Nữ hoàng bi kịch sự sống vô tình
[00:27.76] Xem nàng đã làm gì được với chính mình
[00:33.29] Nàng nhìn mình trong gương
[00:35.59] Dòng máu đầy tay con tim đã khô cạn
[00:43.33] Vì một người trên thế giới này xinh đẹp hơn
[00:50.21] Đẹp hơn
[00:53.86] Hoa hồng hoang dại nặng trĩu chông gai
[00:59.41] Sắc đẹp mau tàn hương thơm chóng phai
[01:04.87] Nàng dìm mình trong nước mắt lạnh lẽo
[01:08.68] Rồi thét gào tới khi không nói lên lời
[01:15.29] Vì một người trên trái đất này xinh đẹp hơn
[01:20.60] Nàng như muốn nói đến mà xem
[01:25.81] Hãy đến bên tôi mà xem
[01:31.04] Say trong dạ tiệc màu đen
[01:36.31] Nghe câu chuyện này
[01:41.27] Nàng như muốn nói hãy nhìn tôi
[01:46.73] Thế giới xoay quanh mình tôi
[01:51.94] Thế giới mịt mùng tăm tối
[01:56.98] Những đêm và ngày
[02:02.16] Những đêm và ngày
[02:14.77] Nữ hoàng không còn ngồi khóc trước gương
[02:20.13] Chết trong giá lạnh không ai đoái thương
[02:25.57] Liệu nàng còn có thấy mình tâm hồn trong sạch
[02:31.21] Khi đã từ giã dương gian
[02:36.43] Liệu nàng còn muốn kết thúc tốt đẹp hơn
[02:41.56] Nàng như muốn nói
[03:03.61] Đến mà xem
[03:07.01] Hãy đến bên tôi mà xem (mà xem)
[03:12.07] Say trong dạ tiệc màu đen (màu đen)
[03:17.34] Nghe câu chuyện này
[03:22.42] Nàng như muốn nói hãy nhìn tôi (hãy nhìn tôi)
[03:27.80] Thế giới xoay quanh mình tôi (mình tôi)
[03:32.95] Thế giới mịt mùng tăm tối
[03:37.96] Những đêm và ngày oh oh
[03:46.00] Nghe thế giới xung quanh nói gì
[03:50.79] Nếu muốn thế giới nghe ta
[03:55.94] Nhưng thân ta xa lạ
[03:58.25] Nhưng thân ta sa đọa quá
[04:05.99] Xem nàng đã làm với chính mình
[04:11.27] Xem nàng đã làm với chính mình
[04:16.32] Xem nàng đã làm với chính mình
[04:21.70] Xem nàng đã làm với chính mình`
    };

    // DOM Elements
    const audio = document.getElementById('audioPlayer');
    const mainPlayBtn = document.getElementById('mainPlayBtn');
    const albumPlayHoverBtn = document.getElementById('albumPlayHoverBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const trackItems = document.querySelectorAll('.track-item');
    const nowPlayingTitle = document.getElementById('nowPlayingTitle');
    const lyricsContainer = document.getElementById('lyricsContainer');
    const lyricsView = document.getElementById('lyricsView');
    const playlistView = document.getElementById('playlistView');
    const tabLyricsBtn = document.getElementById('tabLyricsBtn');
    const tabPlaylistBtn = document.getElementById('tabPlaylistBtn');

    let currentTrackIndex = 0;
    let parsedLyrics = []; // Lưu trữ dạng mảng: [{ time: seconds, text: "..." }]
    let activeLyricIndex = -1;

    // --- Tab Switching Logic ---
    tabLyricsBtn.addEventListener('click', () => {
      lyricsView.classList.remove('hidden');
      playlistView.classList.add('hidden');
      tabLyricsBtn.className = "px-4 py-1.5 text-sm font-semibold border-b-2 border-sky-400 text-sky-400 transition";
      tabPlaylistBtn.className = "px-4 py-1.5 text-sm font-semibold text-slate-400 hover:text-white transition";
    });

    tabPlaylistBtn.addEventListener('click', () => {
      playlistView.classList.remove('hidden');
      lyricsView.classList.add('hidden');
      tabPlaylistBtn.className = "px-4 py-1.5 text-sm font-semibold border-b-2 border-sky-400 text-sky-400 transition";
      tabLyricsBtn.className = "px-4 py-1.5 text-sm font-semibold text-slate-400 hover:text-white transition";
    });

    // --- Parse LRC Lyrics Helper ---
    function parseLRC(lrcText) {
      if (!lrcText) return [];
      const lines = lrcText.split('\n');
      const timeRegex = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
      const result = [];

      for (let line of lines) {
        const match = timeRegex.exec(line);
        if (match) {
          const minutes = parseInt(match[1], 10);
          const seconds = parseInt(match[2], 10);
          const milliseconds = parseInt(match[3].padEnd(3, '0'), 10);
          const time = minutes * 60 + seconds + milliseconds / 1000;
          const text = line.replace(timeRegex, '').trim();
          if (text) {
            result.push({ time, text });
          }
        }
      }
      return result.sort((a, b) => a.time - b.time);
    }

    // Render lời bài hát ra danh sách HTML
    function renderLyrics(index) {
      const rawLrc = lyricsStore[index] || `[00:00.00] ${trackItems[index].querySelector('.track-title').innerText}\n[00:02.00] Lời bài hát đang được cập nhật...`;
      parsedLyrics = parseLRC(rawLrc);
      lyricsContainer.innerHTML = '';
      activeLyricIndex = -1;

      parsedLyrics.forEach((item, idx) => {
        const p = document.createElement('p');
        p.className = 'lyric-line text-slate-400 font-medium my-2.5 transition-all duration-300';
        p.innerText = item.text;
        p.dataset.index = idx;
        p.dataset.time = item.time;
        
        // Nhấp vào dòng chữ bất kỳ để phát ngay mốc thời gian đó
        p.addEventListener('click', () => {
          audio.currentTime = item.time;
          if (audio.paused) audio.play();
        });

        lyricsContainer.appendChild(p);
      });
    }

    // Cập nhật Highlight và Tự động cuộn dọc (Auto Scroll) lời bài hát
    function updateLyricsHighlight(currentTime) {
      if (!parsedLyrics.length) return;

      let newIndex = -1;
      for (let i = 0; i < parsedLyrics.length; i++) {
        if (currentTime >= parsedLyrics[i].time) {
          newIndex = i;
        } else {
          break;
        }
      }

      if (newIndex !== activeLyricIndex) {
        const lines = lyricsContainer.querySelectorAll('.lyric-line');
        if (activeLyricIndex >= 0 && lines[activeLyricIndex]) {
          lines[activeLyricIndex].classList.remove('active');
        }

        if (newIndex >= 0 && lines[newIndex]) {
          lines[newIndex].classList.add('active');
          // Cuộn mượt dòng đang hát vào giữa khung nhìn
          lines[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        activeLyricIndex = newIndex;
      }
    }

    // --- Track Loading & Player Controls ---
    function loadTrack(index) {
      currentTrackIndex = index;
      const selectedItem = trackItems[index];
      const audioSrc = selectedItem.getAttribute('data-src');
      const title = selectedItem.querySelector('.track-title').innerText;

      audio.src = audioSrc;
      nowPlayingTitle.innerText = title;

      // Cập nhật giao diện danh sách nhạc
      trackItems.forEach((item, i) => {
        const icon = item.querySelector('.active-icon');
        if (i === index) {
          item.classList.add('active', 'bg-white/10', 'border-l-4', 'border-sky-400');
          item.querySelector('.track-title').classList.replace('text-slate-300', 'text-slate-200');
          if (icon) icon.classList.remove('opacity-0');
        } else {
          item.classList.remove('active', 'bg-white/10', 'border-l-4', 'border-sky-400');
          item.querySelector('.track-title').classList.replace('text-slate-200', 'text-slate-300');
          if (icon) icon.classList.add('opacity-0');
        }
      });

      renderLyrics(index);
    }

    function togglePlay() {
      if (audio.paused) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    }

    function updatePlayIcon(isPlaying) {
      const icon = mainPlayBtn.querySelector('i');
      const hoverIcon = albumPlayHoverBtn.querySelector('i');
      if (isPlaying) {
        icon.className = 'fa-solid fa-pause';
        hoverIcon.className = 'fa-solid fa-pause';
      } else {
        icon.className = 'fa-solid fa-play ml-0.5';
        hoverIcon.className = 'fa-solid fa-play';
      }
    }

    function formatTime(seconds) {
      if (isNaN(seconds)) return '00:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Event Listeners
    mainPlayBtn.addEventListener('click', togglePlay);
    albumPlayHoverBtn.addEventListener('click', togglePlay);

    prevBtn.addEventListener('click', () => {
      let prevIndex = currentTrackIndex - 1;
      if (prevIndex < 0) prevIndex = trackItems.length - 1;
      loadTrack(prevIndex);
      audio.play().catch(() => {});
    });

    nextBtn.addEventListener('click', () => {
      let nextIndex = currentTrackIndex + 1;
      if (nextIndex >= trackItems.length) nextIndex = 0;
      loadTrack(nextIndex);
      audio.play().catch(() => {});
    });

    trackItems.forEach((item) => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        loadTrack(idx);
        audio.play().catch(() => {});
      });
    });

    audio.addEventListener('play', () => updatePlayIcon(true));
    audio.addEventListener('pause', () => updatePlayIcon(false));

    audio.addEventListener('timeupdate', () => {
      const cur = audio.currentTime;
      const dur = audio.duration;

      if (!isNaN(dur) && dur > 0) {
        progressBar.value = (cur / dur) * 100;
        durationEl.innerText = formatTime(dur);
      }
      currentTimeEl.innerText = formatTime(cur);

      // Cập nhật dòng chữ theo tiến trình nhạc
      updateLyricsHighlight(cur);
    });

    audio.addEventListener('ended', () => {
      let nextIndex = currentTrackIndex + 1;
      if (nextIndex >= trackItems.length) nextIndex = 0;
      loadTrack(nextIndex);
      audio.play().catch(() => {});
    });

    progressBar.addEventListener('input', () => {
      const dur = audio.duration;
      if (!isNaN(dur) && dur > 0) {
        audio.currentTime = (progressBar.value / 100) * dur;
      }
    });

    // Khởi chạy bài hát đầu tiên khi load xong trang
    window.onload = () => {
      loadTrack(0);
    };